from langgraph.graph import StateGraph, START, END
from langchain_huggingface import HuggingFaceEndpoint, ChatHuggingFace
from langchain_core.messages import HumanMessage, BaseMessage
from typing import Annotated, TypedDict, Literal
from langgraph.graph.message import add_messages
from langgraph.checkpoint.sqlite import SqliteSaver
import sqlite3
import os
from dotenv import load_dotenv

load_dotenv()
hf_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

class ChatBotMessage(TypedDict):
    messages: Annotated[list[str], add_messages]

model_id = "meta-llama/Llama-3.1-8B-Instruct"

llm = HuggingFaceEndpoint(
    repo_id=model_id,
    task="text-generation",
    max_new_tokens=256,
    huggingfacehub_api_token=hf_token,
    temperature=0.7,
    do_sample=True,
    repetition_penalty=1.1,
)

model = ChatHuggingFace(llm=llm)

def chat_node(state: ChatBotMessage) -> ChatBotMessage:
    result = model.invoke(state['messages'])

    return {
        'messages': [result]
    }


# check_pointer = MemorySaver()
conn = sqlite3.connect(database='chatbot.db', check_same_thread=False)
check_pointer = SqliteSaver(conn=conn)

graph = StateGraph(ChatBotMessage)


graph.add_node('chat_node', chat_node)

graph.add_edge(START, 'chat_node')
graph.add_edge('chat_node', END)

chat_bot = graph.compile(checkpointer=check_pointer)

def retrieve_all_threads():
    threads_set = set()
    for threads in check_pointer.list(None):
        threads_set.add(threads.config['configurable']['thread_id'])
    return threads_set

# print(retrieve_all_threads())