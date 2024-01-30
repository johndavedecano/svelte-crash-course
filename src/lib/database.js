class DB {
	constructor() {
		this.items = [];
	}

	get() {
		return this.items;
	}

	find(id) {
		return this.items.find((item) => item.id === id);
	}

	edit(id, item) {
		this.items = this.items.map((prev) => {
			if (item.id === prev.id) {
				return { ...prev, ...item };
			}
			return prev;
		});
	}

	add(item) {
		this.items = [...this.items, item];
	}

	remove(id) {
		this.items = this.items.filter((item) => item.id !== id);
	}
}

class UserModel extends DB {
	constructor() {
		super();
	}
}

class PostModel extends DB {
	constructor() {
		super();
	}
}

export const User = new UserModel();

export const Post = new PostModel();
