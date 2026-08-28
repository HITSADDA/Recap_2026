from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
import os

load_dotenv()
hf_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

# Setting Project Name
os.environ["LANGCHAIN_PROJECT"] = 'langsmith-02'

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

prompt1 = PromptTemplate(
    template='Generate a detailed report on {topic}',
    input_variables=['topic']
)

prompt2 = PromptTemplate(
    template='Generate a 5 pointer summary from the following text \n {text}',
    input_variables=['text']
)

parser = StrOutputParser()

chain = prompt1 | model | parser | prompt2 | model | parser

# Adding metadata to the Trace -> LangSmith
config = {
    'run-name': "UV's Sequestial chain",
    'tags': ['my llm app', 'debug all'],
    'metadata': {'model': "meta-llama/Llama-3.1-8B-Instruct", "model_temprature": 0.7}
}

result = chain.invoke({'topic': 'Unemployment in India'}, config=config)

print(result)
