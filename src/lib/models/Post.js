export class Post {
  constructor(id, title, content, author, publishDate, tags = [], imageUrl = null, categories = []) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.publishDate = publishDate;
    this.tags = tags;
    this.imageUrl = imageUrl;
    this.categories = categories;
  }

  static fromJson(json) {
    return new Post(
      json.id,
      json.title,
      json.content,
      json.author,
      new Date(json.publishDate),
      json.tags,
      json.imageUrl,
      json.categories || []
    );
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      author: this.author,
      publishDate: this.publishDate.toISOString(),
      tags: this.tags,
      imageUrl: this.imageUrl,
      categories: this.categories
    };
  }
}