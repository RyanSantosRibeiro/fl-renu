import React, { useEffect, useState } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const Contato = () => {
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formatPhone = (input) => {
    // Lógica para formatar o telefone (exemplo: (99) 99999-9999)
    const cleaned = ('' + input).replace(/\D/g, ''); // Remove caracteres não numéricos
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return input; // Retorna o próprio input se não houver correspondência para a máscara
  };

  const formatEmail = (input) => {
    // Lógica para aplicar máscara ao e-mail
    const maskedEmail = input.replace(/([^\s@]+@[^\s@]+\.[^\s@]+)/, (_, p1) => {
      const visibleChars = Math.min(3, p1.length - 1); // Exibir no máximo os 3 primeiros caracteres antes do '@'
      const maskedChars = p1.length - 1 - visibleChars;
      return '*'.repeat(maskedChars) + p1.slice(-visibleChars);
    });

    return maskedEmail;
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent('Assunto do Email');
    const body = encodeURIComponent(`Nome: ${firstName} ${lastName}%0D%0ATelefone: ${phone}%0D%0AEmail: ${email}%0D%0AMensagem: ${message}`);
    
    const mailtoLink = `mailto:someone@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

    const active = (e) => {
        if($("#contato").offset().top - $(window).scrollTop() < (window.screen.height) && !$(".contato").hasClass("animate")) {
            $(".contato").addClass("animate");
        }
    }
    
    useEffect(() => {
        $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="contato" id='contato'>
            <div className="container">
                <ul>
                    <li>Suporte ao produtor rural</li>
                    <li>Entre em contato por e-mail </li>
                    <li><b>produtor@renu.com.br</b></li> 
                    <li>ou por telefone via </li>
                    <li><b>+55 (11) XXXX-XXXX</b></li>
                </ul>
                <ul>
                    <li>Suporte á empresa consumidora</li>
                    <li>Entre em contato por e-mail </li>
                    <li><b>consumidor@renu.com.br</b></li> 
                    <li>ou por telefone via </li>
                    <li><b>+55 (11) XXXX-XXXX</b></li>
                </ul>
                <ul className='contato__box'>
                    <li>Inicie uma conversa conosco</li>
                    <li>Entre em contato com nossa equipe de vendas para ver como podemos ajudar</li>
                    <div>
                        <input type="text" placeholder='Primeiro Nome' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder='Sobrenome' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder='Telefone' value={formatPhone(phone)} onChange={(e) => setPhone(e.target.value)} />
                        <input type="email" placeholder='E-mail' value={formatEmail(email)} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <textarea  placeholder='Mensagem' value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button onClick={handleSendEmail}>Enviar Email</button>
                </ul>
            </div>
            <a href='/' className='float-button'>Inicie uma conversa!</a>
        </section>
    )
}

export default Contato;