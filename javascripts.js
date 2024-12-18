// JavaScript Document
const responses = {
  "hello": "Chào bạn",
  "hi": "Chào bạn",
  "xin chào": "Chào bạn",
  "thế nào là môn thi tốt nghiệp phù hợp với học sinh?": "- Phù hợp với đam mê, sở thích.</br>- Phù hợp với khả năng, năng lực bản thân.</br>- Phù hợp với tổ hợp xét tuyển Đại học.</br>- Gắn với định hướng ngành học và nghề nghiệp sau này.",
  "tại sao nên chọn môn thi theo khả năng và nguyện vọng?": "- Học đúng sở thích sẽ cảm thấy thích thú, tạo động lực cố gắng hết mình và vượt qua mọi khó khăn.</br>- Đam mê sẽ nuôi dưỡng động lực bền vững nhất.</br>- Đúng đam mê, sở thích sẽ giúp học sinh phát huy hết khả năng, đạt kết quả cao và thành công.</br>- Hạn chế bỏ ngang hoặc chuyển đổi môn khác giữa chừng; tránh lãng phí thời gian, chi phí học tập…",
  "những sai lầm thường gặp khi chọn môn thi tốt nghiệp mà các học sinh cần tránh là gì?": "- Chưa hiểu rõ về các môn thi (đặc điểm môn học, nội dung chương trình, phương pháp học…)</br>- Chọn môn thi không phù hợp với bản thân (năng lực, sở thích…)</br>- Chọn môn thi theo xu hướng phong trào (theo bạn bè, thông tin trên mạng…)</br>- Chọn theo nguyên vọng của người khác (bố mẹ, người thân…)",
  "nếu chọn môn thi và ngành học theo phong trào hoặc nguyên vọng của người khác sẽ như thế nào?": "- Dễ bị áp lực (áp lực làm điều mình không thích, áp lực từ bố mẹ hoặc người khác…)</br>- Học đạt được thành công nếu không đam mê.</br>- Hạn chế sự nỗ lực, cố gắng hết sức.</br>- Giảm khả năng tìm tòi kiến thức phù hợp với sở thích.",
  "để chọn được môn thi và ngành học phù hợp, học sinh cần làm gì?": "- Nghiêm túc khám phá, đánh giá bản thân; biết được những ưu điểm và khuyết điểm của mình.</br>- Xác định sở thích, mục tiêu trong tương lai.</br>- Tìm hiểu về các ngành nghề, gắn với tổ hợp môn thi xét tuyển Đại học và nhu cầu việc làm và dự báo nguồn nhân lực trong tương lai.</br>- Tìm kiếm sự tư vấn từ người có kinh nghiệm (giáo viên, phụ huynh, người có kinh nghiệm…)</br>- Thường xuyên học hỏi không ngừng.",
  "chọn ngành học và định hướng nghề nghiệp dựa trên các tiêu chí nào?": "- Đam mê</br>- Phù hợp với năng lực</br>- Gắn với nhu cầu của thực tiễn xã hội.</br>- Phù hợp với điều kiện sức khỏe.</br>- Phù hợp hoàn cảnh kinh tế gia đình."
};

document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };

        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✘ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}