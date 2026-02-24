"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import { ChevronLeft, GraduationCap, MessageSquare, Zap } from 'lucide-react';

const TeachersContent = () => {
  const searchParams = useSearchParams();

  const planoSelecionado = searchParams.get('plano') || "Plano com o Time";

  const teachers = [
    {
      name: "Teacher Mariana",
      image: "/teacher-mariana.jpg",
      tags: ["Speaking", "Reading", "Jornalismo", "IELTS/TOEFL"],
      special: "Especialista em Preparatórios Internacionais",
      description: (
        <div className="space-y-4">
          <p>Nascida e criada no interior de MG, sou fã de pão de queijo, livros e reality shows duvidosos! 😅</p>
          <p>Também adoro estudar idiomas e o inglês faz parte da minha vida <strong>há mais de 15 anos</strong>! Te ajudo com <strong>todas as habilidades</strong> - embora AME focar em <strong>Speaking e Reading</strong> porque, dessa forma, podemos explorar juntos muitas palavras novas e bater muito papo 😎</p>
          <p>Além de teacher, sou jornalista e adoro fazer perguntas para te conhecer e entender suas necessidades! 📜</p>
          <div className="bg-navy/5 p-6 rounded-2xl border-l-4 border-navy italic text-slate-700 leading-relaxed">
            "Ah, e já falei que preparatório para o <strong>IELTS ou TOEFL</strong> é comigo mesmo? Nossos alunos já foram aprovados em universidades renomadas nos EUA e Canadá! ✈️"
          </div>
          <p className="text-sm font-medium text-slate-500">Já falei que sou parte do <strong>time da Lila há 3 anos?</strong> O tempero da Lila se misturou com o meu mineiro e, quem provou, nunca reclamou!</p>
        </div>
      )
    },
    {
      name: "Teacher Isabelle",
      image: "/teacher-belle.jpg",
      tags: ["Iniciantes", "Teens", "Adultos", "TEFL Certified"],
      special: "Certificada pelo TEFL - 8 anos de experiência",
      description: (
        <div className="space-y-4">
          <p>Meu nome é Isabelle, mas você pode me chamar de <strong>Teacher Belle!</strong> Que bom te ver por aqui! Hello! 👋</p>
          <p>Com meus <strong>8 anos de experiência</strong> na jornada do inglês, sei exatamente quais são os desafios de aprender e dominar esse idioma incrível.</p>
          <p>Hoje, <strong>certificada pelo TEFL</strong>, estou preparada para te acompanhar em todas as etapas, seja para trabalho, imigração, provas ou até hobbies.</p>
          <div className="bg-gold/10 p-6 rounded-2xl border-l-4 border-gold italic text-slate-700 leading-relaxed">
            "Minhas aulas são dinâmicas, leves e personalizadas. Ensino <strong>todos os níveis e idades</strong>, mas <strong>teens e adultos iniciantes</strong> são o meu forte aqui com a Lila! 💪"
          </div>
          <p>Estou muito animada para ser a sua teacher! See you soon!</p>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">

        <div className='flex flex-col'>
          <Link href="/servicos" className="inline-flex items-center gap-2 text-navy/40 hover:text-navy mb-5 font-black text-xs uppercase tracking-widest transition-all">
            <ChevronLeft size={16} /> Voltar para os planos
          </Link>
          <Link href="/aula-individual" className="inline-flex items-center gap-2 text-navy/40 hover:text-navy mb-16 font-black text-xs uppercase tracking-widest transition-all">
            <ChevronLeft size={16} /> Voltar para os tipos de aulas
          </Link>
        </div>

        {searchParams.get('plano') && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm"
          >
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Plano selecionado:</span>
            <span className="text-sm font-bold text-navy italic">{planoSelecionado}</span>
          </motion.div>
        )}

        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 text-gold mb-6">
            <Zap size={18} fill="currentColor" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black">Curadoria de Elite</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-navy mb-8 leading-tight">
            Os teachers que <br />
            <span className="text-gold italic font-medium">eu selecionei pra você.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            Não é só sobre dar aula, é sobre conexão. Eu escolhi a dedo cada profissional do meu time para garantir que você tenha a mesma experiência leve e eficiente que eu acredito.
          </p>
        </div>

        <div className="grid gap-20">
          {teachers.map((teacher, index) => {
            const planoComNomeTeacher = planoSelecionado.replace("com o Time", `com ${teacher.name}`);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row group"
              >
                <div className="lg:w-112.5 relative min-h-112.5 overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-8 left-8 right-8">
                    <div className="bg-navy/90 backdrop-blur-md px-6 py-3 rounded-2xl text-white font-bold text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3">
                      <GraduationCap size={16} className="text-gold" />
                      {teacher.special}
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-10">
                    {teacher.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-[0.2em] font-black bg-slate-50 text-slate-400 border border-slate-100 px-4 py-2 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-10 italic">
                    {teacher.name}
                  </h2>

                  <div className="text-slate-600 text-lg leading-relaxed mb-12">
                    {teacher.description}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-slate-50">
                    <Link
                      href={`/contrato?plano=${encodeURIComponent(planoComNomeTeacher)}&teacher=${encodeURIComponent(teacher.name)}`}
                      className="bg-navy text-white px-10 py-5 rounded-2xl font-bold hover:bg-gold hover:text-navy transition-all text-center shadow-xl shadow-navy/10 uppercase text-xs tracking-widest"
                    >
                      Agendar com {teacher.name.split(' ')[1]}
                    </Link>
                    <Link
                      href="/aula-individual"
                      className="px-10 py-5 border-2 border-slate-100 text-navy/40 rounded-2xl font-bold hover:border-navy hover:text-navy transition-all text-center uppercase text-xs tracking-widest"
                    >
                      Ver Planos
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 bg-white border border-slate-200 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-slate-200"
        >
          <div className="relative z-10">
            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Ainda em dúvida?</span>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-navy mt-6 mb-8 italic">
              Qual teacher combina mais <br /> com o seu momento?
            </h3>
            <p className="text-slate-500 text-xl mb-12 max-w-xl mx-auto">
              Me chama no WhatsApp. Eu te ajudo a decidir com base no seu perfil e no que você precisa destravar agora.
            </p>
            <button className="bg-gold text-navy px-12 py-6 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-gold/20 flex items-center gap-3 mx-auto uppercase tracking-tighter">
              <MessageSquare size={24} fill="currentColor" /> Chamar a Lila
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const TeachersPage = () => {
  return (
    <Layout>
      <PageTransition>
        <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-black text-navy uppercase tracking-widest">Carregando Teachers...</div>}>
          <TeachersContent />
        </Suspense>
      </PageTransition>
    </Layout>
  );
};

export default TeachersPage;