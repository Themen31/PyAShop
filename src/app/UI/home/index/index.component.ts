import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chatContainer");
    const minimizeButton = document.getElementById("minimize-button");
    const chatInput = document.getElementById("chat-input") as HTMLInputElement;
    const chatMessages = document.getElementById("conversation-group");
    const sendButton = document.getElementById("SentButton");

    if (chatButton && chatContainer) {
      chatButton.addEventListener("click", function () {
        chatContainer.classList.add("open");
        chatButton.classList.add("clicked");
      });
    }

    if (minimizeButton && chatContainer) {
      minimizeButton.addEventListener("click", function () {
        chatContainer.classList.remove("open");
        if (chatButton) {
          chatButton.classList.remove("clicked");
        }
      });
    }

    function createMessage(message: string, isUser = true) {
      const newMessage = document.createElement('div');
      newMessage.classList.add(isUser ? 'sentText' : 'botText');
      newMessage.textContent = message;
      if (chatMessages) {
        chatMessages.appendChild(newMessage);
      }
      return newMessage;
    }

    function chatbotResponse(userInput: string) {
      let botMessage = '';

      if (userInput.includes('hola')) {
        botMessage = "En qué podemos ayudarte?";
      } else if (
        userInput.includes('necesito tragos') ||
        userInput.includes('quiero un blue') ||
        userInput.includes('estan atendiendo') ||
        userInput.includes('necesito cerveza') ||
        userInput.includes('delivery')
      ) {
        botMessage = "¡Claro! Estamos listos para ayudarte. Aquí está nuestro número de contacto: +51 959 910 278. Si deseas un servicio personalizado, no dudes en contactarnos.";
      } else {
        botMessage = "Lo siento, no puedo entender tu solicitud. ¿En qué más puedo ayudarte?";
      }

      const message = botMessage;
      const botResponse = createMessage(message, false);
      if (botResponse) {
        botResponse.scrollIntoView();
      }
    }

    if (chatInput) {
      chatInput.addEventListener("input", function (event) {
        if (event.target && chatInput.value) {
          sendButton?.classList.add("svgsent");
        } else {
          sendButton?.classList.remove("svgsent");
        }
      });

      chatInput.addEventListener("keypress", function (event) {
        if (event.target && event.keyCode === 13) {
          const message = chatInput.value;
          chatInput.value = "";
          const userMessage = createMessage(message);
          if (userMessage) {
            userMessage.scrollIntoView();
          }
          setTimeout(() => chatbotResponse(message.toLowerCase()), 1000);
          sendButton?.classList.add("svgsent");
        }
      });
    }

    if (sendButton) {
      sendButton.addEventListener("click", function () {
        if (chatInput) {
          const message = chatInput.value;
          chatInput.value = "";
          const userMessage = createMessage(message);
          if (userMessage) {
            userMessage.scrollIntoView();
          }
          setTimeout(() => chatbotResponse(message.toLowerCase()), 1000);
          sendButton.classList.add("svgsent");
        }
      });
    }
  }

}
