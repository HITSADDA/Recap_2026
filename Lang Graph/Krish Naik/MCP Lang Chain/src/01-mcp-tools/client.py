from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain.agents import create_agent
# from langgraph.prebuilt import create_react_agent
from langchain_groq import ChatGroq

from dotenv  import load_dotenv
load_dotenv()

import asyncio
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

async def main():
    client = MultiServerMCPClient(
        {
            "math": {
                "command": "python",
                "args": [str(BASE_DIR / "mathserver.py")],
                "transport": "stdio"
            },
            "weather": {
                "url": "http://localhost:8000/mcp",
                "transport": "streamable_http"
            }
        },
    )

    import os
    os.environ['GROQ_API_KEY'] = os.getenv('GROQ_API_KEY')

    tools = await client.get_tools()

    model = ChatGroq(model='qwen/qwen3.8-27b', temperature=0)
    
    agent = create_agent(model,tools)

    m_response = await agent.ainvoke({"messages": [{"role": "user", "content": "What is (2+4) * 2"}]})
    for m in m_response["messages"]:
        m.pretty_print()

asyncio.run(main())