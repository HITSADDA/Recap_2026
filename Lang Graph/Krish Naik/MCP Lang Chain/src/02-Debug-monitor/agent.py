from typing import Annotated, TypedDict
from dotenv import load_dotenv

from langgraph.graph import add_messages, StateGraph, START, END
from langchain_core.messages import AnyMessage
from langgraph.prebuilt import ToolNode, tools_condition
from langgraph.graph.message import add_messages

from langchain_groq import ChatGroq

import os

load_dotenv()

os.environ['GROQ_API_KEY'] = os.getenv("GROQ_API_KEY")
os.environ['LANGSMITH_API_KEY'] = os.getenv("LANGSMITH_API_KEY")
os.environ['LANGSMITH_TRACING'] = 'true'
os.environ['LANGSMITH_PROJECT'] = 'Krish Naik Debug 1'



def make_tool_graph():
    from langchain.tools import tool

    @tool
    def add(a: int, b: int) -> int:
        """Add Two Numbers"""
        return a + b

    tools = [add]

    model = ChatGroq(model="qwen/qwen3.8-27b", temperature=0.2)

    lllm_with_tools = model.bind_tools(tools)
    class State(TypedDict):
        messages: Annotated[list[AnyMessage], add_messages]


    def tool_calling_llm(state: State) -> State:
        return {'messages': [lllm_with_tools.invoke(state['messages'])  ]}

    graph = StateGraph(State)

    graph.add_node('tool_calling_llm', tool_calling_llm)
    graph.add_node('tools', ToolNode(tools))

    graph.set_entry_point('tool_calling_llm')
    graph.add_conditional_edges('tool_calling_llm', tools_condition)
    graph.add_edge('tools', 'tool_calling_llm')

    return graph.compile()


tool_agent = make_tool_graph()

# Run -> langgraph dev  at the same level of this file