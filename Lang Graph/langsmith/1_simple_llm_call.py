from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
import os

load_dotenv()
hf_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

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

# Simple one-line prompt
prompt = PromptTemplate.from_template("{question}")



parser = StrOutputParser()

# Chain: prompt → model → parser
chain = prompt | model | parser

# Run it
result = chain.invoke({"question": "What is the capital of France?"})
print(result)
