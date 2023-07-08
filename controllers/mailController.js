const nodemailer = require('nodemailer')
const express = require("express")
const router = express.Router()

// Функция для отправки письма на почту
exports.sendEmail = async(to, subject, text) => {
    try {
        // Создаем транспорт для отправки почты
        const transporter = nodemailer.createTransport({
            service: 'SMTP',
            host: 'smtp.example.com', // Укажите SMTP-сервер для вашего почтового провайдера
            port: 587, // Укажите порт для SMTP-сервера
            secure: false, // Установите значение true, если используется SSL
            auth: {
                user: 'your-email@example.com', // Укажите вашу почту
                pass: 'your-password', // Укажите пароль от вашей почты
            },
        })

        // Определяем настройки письма
        const mailOptions = {
            from: 'your-email@example.com', // Отправитель
            to: to, // Получатель
            subject: subject, // Тема письма
            text: text, // Текст письма (для HTML-писем используйте свойство 'html' вместо 'text')
        }

        // Отправляем письмо
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent:', info.messageId)
    } catch (error) {
        console.error('Error sending email:', error)
    }
}

// Пример использования функции sendEmail
const to = 'recipient@example.com' // Почтовый адрес получателя
const subject = 'Регистрация на сайте' // Тема письма
const text = 'Здравствуйте! Спасибо за регистрацию на нашем сайте.' // Текст письма

module.exports = router