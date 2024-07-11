export const notificationItems = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Tin nóng hệ social qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe ${
    i + 1
  }`,
  description:
    "Nội dung này thường chỉ show cho mấy máy màn hình to v beep để có cái nhìn lướt qua về cái tin mới của nó. Còn mấy máy màn hình lỏ lỏ thì mút tay ấy mà đọc?",
  uploader: `Bởi bộ tài nguyên và môi trường, cầm đầu bởi Hùng ${i + 1}`,
  image: `https://wallup.net/wp-content/uploads/2016/01/111509-landscape-nature.jpg?${
    i + 1
  }`,
  content: "JAHWA NƯƠNG",
  date: new Date(Date.now() - i * 1000 * 3600 * 24).toISOString().split("T")[0],
  type: ["social", "company", "temporary", "picture"][
    Math.floor(Math.random() * 4)
  ],
}));
