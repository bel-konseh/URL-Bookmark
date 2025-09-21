
import './App.css'
import UrlList from './components/main-page-components/UrlList';

function App() {
    const urls = [
  {
    title: "OpenAI",
    description: "Artificial Intelligence research lab",
    url: "https://openai.com"
  },
  {
    title: "Google",
    description: "Search engine and tech giant",
    url: "https://www.google.com"
  },
  {
    title: "GitHub",
    description: "Code hosting and collaboration",
    url: "https://github.com"
  },
  {
    title: "MDN Web Docs",
    description: "Web development documentation",
    url: "https://developer.mozilla.org"
  },
  {
    title: "Wikipedia",
    description: "Free online encyclopedia",
    url: "https://www.wikipedia.org"
  },
  {
    title: "Stack Overflow",
    description: "Community of developers answering coding questions",
    url: "https://stackoverflow.com"
  },
  {
    title: "YouTube",
    description: "Video-sharing platform",
    url: "https://www.youtube.com"
  },
  {
    title: "Twitter (X)",
    description: "Social media and news platform",
    url: "https://twitter.com"
  },
  {
    title: "LinkedIn",
    description: "Professional networking platform",
    url: "https://www.linkedin.com"
  },
  {
    title: "Reddit",
    description: "Community discussion platform",
    url: "https://www.reddit.com"
  }
];
//  const urlList =[]


  return (
    <>
      <UrlList urlList={urls}/>
    </>
  )
}

export default App
