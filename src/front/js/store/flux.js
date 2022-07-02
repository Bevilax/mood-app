const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      events: [],
      user: {},
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
      register: async (email, password, zipcode) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            zipcode: zipcode,
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
        } catch (error) {
          console.error("There has been an error logging in!");
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("You've been logged out");
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
          setStore({ token: data.token });
          setStore({ user: data.user });
          console.log(data);
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
      getEventByZipAndTaxonomy: async (taxonomy) => {
        console.log(taxonomy);
        let store = getStore();

        try {
          const resp = await fetch(
            "https://api.seatgeek.com/2/events?postal_code=" +
              store.user.zipcode +
              "&taxonomies.id=" +
              taxonomy +
              "&sort=score.desc&per_page=300&client_id=Mjc0NDkwMDl8MTY1NTI1MDI4Ny4yNTc1MjM4"
          );
          const data = await resp.json();
          if (data.events) {
            setStore({ events: data.events });

            console.log(data.events);
            console.log("this is events from the store", store.events);
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};
export default getState;
