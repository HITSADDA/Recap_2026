import streamlit as st
import uuid
from backend import chat_bot, retrieve_all_threads
from langchain_core.messages import HumanMessage


def new_thread_id():
    return uuid.uuid4()

def new_chat():
    st.session_state['thread_id'] = new_thread_id()
    st.session_state['chat_history'] = []
    add_thread(st.session_state['thread_id'])

def add_thread(id):
     if id not  in st.session_state:
        st.session_state['chat_threads'].append(id)

def select_chat(id):
    load_chats(id)

def load_chats(id):
    CONFIG = {'configurable': {'thread_id': str(id)}}
    messages = chat_bot.get_state(config=CONFIG).values['messages']

    temp_msgs = []
    for msg in messages:
        if isinstance(msg, HumanMessage):
            role = 'user'
        else:
            role = 'assistant'
        temp_msgs.append({'role': role, 'content': msg.content})
    st.session_state['chat_history'] = temp_msgs

# ------------------------ Sessions ------------------------------

if 'chat_history' not in st.session_state:
    st.session_state['chat_history'] = []

if 'thread_id' not in st.session_state:
     st.session_state['thread_id'] = new_thread_id()

if 'chat_threads' not  in st.session_state:
    st.session_state['chat_threads'] = retrieve_all_threads()

# ---------------------------------------------------------------------------------

# --------------------------------------- Side Bar UI------------------------------
st.sidebar.title("UV's Chat BOt")
if st.sidebar.button("New Chat"):
     new_chat()

for thread_id in st.session_state['chat_threads']:
    if st.sidebar.button(str(thread_id)):
        st.session_state['thread_id'] = thread_id
        select_chat(str(thread_id))
# ---------------------------------------------------------------------------------


# ----------- Conversations -------------------------------------------------------
for chat in  st.session_state['chat_history']:
    with st.chat_message(chat['role']):
        st.text(chat['content'])

usr_input = st.chat_input('Type here')
thread_id = '1'

if usr_input:
    st.session_state['chat_history'].append({'role': 'user', 'content': usr_input})
    with st.chat_message('user'):
            st.text(usr_input)

    CONFIG = {'configurable': {'thread_id': st.session_state['thread_id']}}
    stream = chat_bot.stream({'messages': [HumanMessage(usr_input)]}, stream_mode="messages" ,config=CONFIG)
    st.write_stream(message_chunk.content for message_chunk, _ in stream)

# ---------------------------------------------------------------------------------------------------------