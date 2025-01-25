// src/components/Blogs.js

import React from 'react';

const blogPosts = [
  {
    title: 'AI-Powered Media Pipeline: From Video Downloads to Intelligent Transcriptions and Summaries',
    date: 'October 4, 2024',
    excerpt: 'Discover how AI transforms media processing! From video downloads to speech transcription and smart summaries, this project automates it all with cutting-edge tools like Whisper and pytube. A seamless pipeline for effortless content creation.',
    link: 'https://medium.com/@gurramsaivinil/ai-powered-media-pipeline-from-video-downloads-to-intelligent-transcriptions-and-summaries-160abc2d7e16',
  },
  {
    title: 'Building a Smart File-Based Question Answering Assistant with OpenAI’s GPT-4o API',
    date: 'October 5, 2024',
    excerpt: 'we’ve built a powerful and versatile assistant capable of handling multiple file types and extracting specific information efficiently. Imagine all the time you can save by turning those lengthy, cumbersome documents into easily searchable information!',
    link: 'https://medium.com/@gurramsaivinil/building-a-smart-file-based-question-answering-assistant-with-openais-gpt-4o-api-3e8a2819da85',
  },
  {
    title: 'Mastering AI Evaluations with OpenAI Evals: Building Reliable and Creative AI Models',
    date: 'October 8, 2024',
    excerpt: 'OpenAI Evals are tools that help us understand how well an AI model is performing. ',
    link: 'https://medium.com/@gurramsaivinil/mastering-ai-evaluations-with-openai-evals-building-reliable-and-creative-ai-models-305b11c5da47',
  }
];

const Blogs = () => {
  return (
    <section id="blogs" data-aos="fade-up">
      <h2>Blogs</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <h3>{post.title}</h3>
            <p>
              <em>{post.date}</em>
            </p>
            <p>{post.excerpt}</p>
            <a href={post.link} className="button" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
