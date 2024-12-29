import google.generativeai as genai

API_KEY = "AIzaSyCC4l-17YpmR3UYt0j5_IrPOPaUSTc29I8"
genai.configure(api_key=API_KEY)

# Create the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro-exp-0827",
    generation_config=generation_config
)

chat_session = model.start_chat()

try:
    response = chat_session.send_message("Merhaba, nasılsın?")
    print(response.text)
except Exception as e:
    print(f"Hata oluştu: {e}")
