export const fetchMember = async () => {
  const response = await fetch(
    "https://petstore3.swagger.io/api/v3/user/theUser"
  );

  if (!response.ok) {
    const error = new Error("取得會員資料時發生錯誤");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { password } = await response.json();

  return password;
};
