from mcp.server.fastmcp import FastMCP


mcp = FastMCP("Math")

@mcp.tool()
def get_weater() ->str:
    """ __summary__
    get weater data from the web
    """
    return "The Weater is sunny"



if __name__ == "__main__":
    mcp.run(transport="streamable-http")