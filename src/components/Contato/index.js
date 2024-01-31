import React, { useEffect, useState } from 'react';
import './style.scss';
import logo from '../../assets/img/logo.png';
import $ from 'jquery';


const Contato = ({language}) => {
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

  const handleSendEmail = ({language}) => {
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
                    {language==0?<>
                        <li className='highlight'>Suporte</li>
                        <li>Entre em contato por e-mail via</li>
                        <li><b>suporte@renu.com.br</b></li> 
                        <li>ou por telefone via </li>
                        <li><b>+55 (11) 3049-3000</b></li>
                    </>:<>
                    {/* INGLES */}
                        <li className='highlight'>Support</li>
                        <li>Contact us by email  </li>
                        <li><b>suporte@renu.com.br</b></li> 
                        <li>or call</li>
                        <li><b>+55 (11) 3049-3000</b></li>
                    </>}
                </ul>
                <ul className='contato__box'>
                    {language==0?<>
                        <li>Inicie uma conversa conosco</li>
                        <li>Entre em contato com nossa equipe de vendas para ver como podemos ajudar</li>
                    </>:<>
                        <li>Start The Conversation</li>
                        <li>Contact our sales team to find out what Renu can do for you.</li>
                    </>}
                    <div>
                        <input type="text" placeholder={`${language==0?'Primeiro Nome':'First Name'}`} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder={`${language==0?'Sobrenome':'Last Name'}`} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" placeholder={`${language==0?'Telefone':'Phone'}`} value={formatPhone(phone)} onChange={(e) => setPhone(e.target.value)} />
                        <input type="email" placeholder='E-mail' value={formatEmail(email)} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <textarea  placeholder={`${language==0?'Mensagem':'Message'}`} value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button onClick={handleSendEmail}>{language==0?'Enviar':'Send'}</button>
                </ul>
            </div>
            <a href='#contato' className='float-button'>{language==0?'Inicie uma conversa':'Start The Conversation'}</a>
        </section>
    )
}

export default Contato;