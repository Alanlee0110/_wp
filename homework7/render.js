export function list(posts) {
  return `
    <html>
      <body>
        <h1>文章列表</h1>
        <a href="/post/new">新增文章</a>
        <ul>
          ${posts.map(post => `
          <li>
          <a href="/post/${post.id}">${post.title}</a><br>
          <small> 發表時間：${new Date(post.created_at).toLocaleString()}</small>
          </li>
          `).join('')}
        </ul>
      </body>
    </html>
  `;
}

export function show(post) {
  return `
    <html>
      <body>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <small> 發表時間：${new Date(post.created_at).toLocaleString()}</small>
        <br><br>
        <a href="/">← 回文章列表</a>
      </body>
    </html>
  `;
}

export function newPost() {
  return `
    <html>
      <body>
        <h1>新增文章</h1>
        <form action="/post" method="post">
        <input type="text" name="title" placeholder="標題" required><br><br>
        <textarea name="body" placeholder="內容" required></textarea><br><br>
        <button type="submit">送出</button>
        </form>
        <br>
        <a href="/">← 回首頁</a>
      </body>
    </html>
  `;
}
