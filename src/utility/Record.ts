interface UserRecordInfo {
  age: number;
}

type UserName = "john" | "andrew" | "elon" | "jack";
// It is useful if all items have a similar type of value, especially if there are a large number of them:
const userList: Record<UserName, UserRecordInfo> = {
  john: { age: 18 },
  andrew: { age: 20 },
  elon: { age: 49 },
  jack: { age: 56 },
};
