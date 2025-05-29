Start using the kluster.ai API
The kluster.ai API provides a straightforward way to work with Large Language Models (LLMs) at scale. It is compatible with OpenAI's API and SDKs, making it easy to integrate into your existing workflows with minimal code changes.

Get your API key＃
Navigate to the kluster.ai developer console API Keys section and create a new key. You'll need this for all API requests.

For step-by-step instructions, refer to the Get an API key guide.

Set up the OpenAI client library＃
Developers can use the OpenAI libraries with kluster.ai with no changes. To start, you need to install the library:

Python

pip install "openai>=1.0.0"

Once the library is installed, you can instantiate an OpenAI client pointing to kluster.ai with the following code and replacing INSERT_API_KEY:

Python

from openai import OpenAI

client = OpenAI(
base_url="https://api.kluster.ai/v1",
api_key="INSERT_API_KEY", # Replace with your actual API key
)

Check the kluster.ai OpenAI compatibility page for detailed information about the integration.

API request limits＃
The following limits apply to API requests based on your plan:

Trial
Core
Scale
Enterprise
Model Context size
[tokens] Max output
[tokens] Max batch

# Real-time completions with the Meta Llama 4 Maverick model on kluster.ai

from os import environ
from openai import OpenAI
from getpass import getpass

image_url = "https://github.com/kluster-ai/klusterai-cookbook/blob/main/images/parking-image.jpeg?raw=true"

# Get API key from user input

api_key = environ.get("API_KEY") or getpass("Enter your kluster.ai API key: ")

# Initialize OpenAI client pointing to kluster.ai API

client = OpenAI(api_key=api_key, base_url="https://api.kluster.ai/v1")

print(f"📤 Sending a chat completion request to kluster.ai...\n")

# Create chat completion request

completion = client.chat.completions.create(
model="meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
messages=[
{
"role": "user",
"content": [
{"type": "text", "text": "Who can park in the area?"},
{"type": "image_url", "image_url": {"url": image_url}},
],
}
],
)

print(f"\nImage URL: {image_url}")

"""Logs the full AI response to terminal."""

# Extract model name and AI-generated text

model_name = completion.model
text_response = completion.choices[0].message.content

# Print response to console

print(f"\n🔍 AI response (model: {model_name}):")
print(text_response)
