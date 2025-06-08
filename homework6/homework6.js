const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('blog.db');

db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

const posts = [
    { title: "第一篇", content: "這是第一篇貼文的內容" },
    { title: "第二篇", content: "這是第二篇貼文的內容" },
    { title: "第三篇", content: "這是第三篇貼文的內容" }
];

posts.forEach(post => {
    db.run(`INSERT INTO posts (title, content) VALUES (?, ?)`, [post.title, post.content], (err) => {
        if (err) {
            console.error("插入貼文時發生錯誤：", err.message);
        } else {
            console.log(`成功新增貼文：${post.title}`);
        }
    });
});

db.close();
