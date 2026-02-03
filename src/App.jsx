import React from 'react';
import { WhatsappLogo, Motorcycle, Clock, ShieldCheck, MapPin, Package, Phone, Envelope } from '@phosphor-icons/react';
import './App.css';
import motoboyImage from './assets/tiozao.jpeg';
<img src="/logo-tiozao.jpeg" alt="TTiozão Motoboy" />

function App() {
  const whatsappNumber = "5517991645371";
  const whatsappMessage = "Olá! Gostaria de solicitar um serviço de entrega do TTiozão Motoboy";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-area">
            <div className="logo-icon">
              <Motorcycle size={32} />
            </div>
            <div className="logo-text">
              <h1>TTiozão Motoboy</h1>
              <p className="tagline">ENTREGA RÁPIDA, SEGURA SEM ENROLAÇÃO!</p>
            </div>
          </div>
          
          <div className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
            <a href={whatsappUrl} className="whatsapp-nav" target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h2>ENTREGA RÁPIDA E SEGURA</h2>
            <h3>SEM ENROLAÇÃO!</h3>
            <p className="hero-description">
              Motoboy de confiança para entregas urgentes, documentos, 
              encomendas e muito mais. Atendemos em toda região de Catanduva!
            </p>
            
            <a 
              href={whatsappUrl}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={24} />
              <span>Chamar no WhatsApp agora</span>
            </a>

            <div className="hero-contact-info">
              <div className="contact-badge">
                <Phone size={18} />
                <span>(17) 99164-5371</span>
              </div>
              <p className="contact-note">Mande mensagem no WhatsApp</p>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src={motoboyImage}
              alt="Motoboy profissional" 
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="servicos">
        <div className="container">
          <h3 className="section-title">Nossos Serviços</h3>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={40} />
              </div>
              <h4>Entregas Rápidas</h4>
              <p>Urgências resolvidas em minutos, sem demora.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={40} />
              </div>
              <h4>Segurança Total</h4>
              <p>Seus itens chegam intactos e com garantia.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={40} />
              </div>
              <h4>Toda Região de Catanduva</h4>
              <p>Cobertura completa de toda região de Catanduva.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Package size={40} />
              </div>
              <h4>Diversos Itens</h4>
              <p>Documentos, pacotes, peças e mais.</p>
            </div>
          </div>

          <div className="whatsapp-center">
            <a 
              href={whatsappUrl}
              className="whatsapp-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={24} />
              <span>Falar diretamente no WhatsApp: (17) 99164-5371</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h3>Entrega Rápida e Segura</h3>
          <p>Em toda região!</p>
          <a 
            href={whatsappUrl}
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={24} />
            Solicitar Entrega pelo WhatsApp
          </a>
          <p className="cta-note">Número direto: (17) 99164-5371</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contato">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Motorcycle size={28} />
                <h4>TTiozão Motoboy</h4>
              </div>
              <p>Serviço de motoboy confiável e rápido para toda a região de Catanduva.</p>
              
              <div className="footer-whatsapp">
                <a 
                  href={whatsappUrl}
                  className="footer-whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={20} />
                  <span>Clique aqui para WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="footer-contact">
              <h5>Contato Direto</h5>
              <div className="contact-item">
                <WhatsappLogo size={20} />
                <span>
                  <strong>(17) 99164-5371</strong>
                </span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>Telefone: (17) 99164-5371</span>
              </div>
              <div className="contact-item">
                <Envelope size={20} />
                <span>segantimrogerio@gmail.com</span>
              </div>
              <div className="contact-item">
                <Clock size={20} />
                <span>Atendimento rápido</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 TTiozão Motoboy - Todos os direitos reservados</p>
            <p className="footer-tagline">Entrega rápida e segura em toda região</p>
            <p className="footer-number">
              <strong>WhatsApp/Telefone: (17) 99164-5371</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Fale conosco no WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" />
      </a>
    </div>
  );
}

export default App;