export interface BlogLanguage {
    slug: string;
    title: string;
    description: string;
    content: string;
    highlight?: string;   // 👈 new
    proTip?: string;      // 👈 new
  }
  
  export interface Blog {
    id: string;
    featuredImage: string;
    publishedAt: string;
    author: string;
    en: BlogLanguage;
    hi: BlogLanguage;
  }
  