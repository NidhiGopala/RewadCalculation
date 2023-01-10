export default function() {
    // simulates data coming from a database.
    return Promise.resolve(
      [
          {
            custid: 1,
            name: "User1",
            amt: 65,
            transactionDt: "05-01-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 115,
            transactionDt: "05-21-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 34,
            transactionDt: "05-21-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 990,
            transactionDt: "06-01-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 120,
            transactionDt: "06-21-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 110,
            transactionDt: "07-01-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 1,
            transactionDt: "07-02-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 332,
            transactionDt: "07-03-2023"
          },
          {
            custid: 1,
            name: "User1",
            amt: 224,
            transactionDt: "07-21-2023"
          },
          {
            custid: 2,
            name: "User2",
            amt: 125,
            transactionDt: "05-01-2023"
          },
          {
            custid: 2,
            name: "User2",
            amt: 75,
            transactionDt: "05-21-2023"
          },
          {
            custid: 2,
            name: "User2",
            amt: 10,
            transactionDt: "06-01-2023"
          },
          {
            custid: 2,
            name: "User2",
            amt: 75,
            transactionDt: "01-06-2023"
          },
          {
            custid: 2,
            name: "User2",
            amt: 200,
            transactionDt: "07-01-2023"
          },
          {
            custid: 2,
            name: "User2",
            amt: 224,
            transactionDt: "07-01-2023"
          },
          {
            custid: 3,
            name: "User3",
            amt: 120,
            transactionDt: "01-01-2023"
          }
      ]
    );
  };