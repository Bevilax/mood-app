const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      events: {},
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      register: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/register/`,
            opts
          );

          if (resp.status !== 201) {
            alert("Account already exists, please log in!");
            // return false;
          } else if (resp.status == 201) {
            alert("You created your account");
          }

          // const data = await resp.json();
          // console.log(data);
          // sessionStorage.setItem("token", data.access_token);
          // setStore({ token: data.access_token });
          // return true;
        } catch (error) {
          console.error("There has been an error logging in!");
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("You are logout");
        setStore({ token: null });
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/token/`,
            opts
          );

          if (resp.status !== 200) {
            alert("There was an error");
            return false;
          }

          const data = await resp.json();
          console.log(data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error logging in!");
        }
      },
      getEventByZip: (zip) => {
        fetch(process.env.BACKEND_URL + "/api/event/" + zip)
          .then((resp) => resp.json())
          .then((data) => setStore({ events: data }));
      },
    },
  };
};
export default getState;
