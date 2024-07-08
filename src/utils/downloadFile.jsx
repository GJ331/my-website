export const downloadFile = () => {
  const fileName = "林之蓁的履歷.pdf";
  const filePath = "/src/assets/pdf/portfolio.pdf";

  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
