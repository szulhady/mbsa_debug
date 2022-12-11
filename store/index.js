export const state = () => ({
  activeUser: 0,
  url: "https://soap.txio.live",
  locations: [
    {
      data: "",
      ts: "",
      id: "",
      lat: "",
      lng: "",
      name: "",
    },
  ],
  showData: false,
  buildingDetails: [
    { desc: "          owner", image: "OWNER.png", data: null },
    // { desc:"no of floors",
    //   image:"NOOFFLOOR.png",
    //   data:null
    // },
    { desc: "net floor area", image: "NETFLOORAREA.png", data: null },
    { desc: "no of occupants", image: "1.png", data: null },
    { desc: "Grid electricity emission factor", image: "CEI.png", data: null },
  ],
  id: null,
  admin: {
    allBuilding: [],
  },
  adminCount: 0,
});

export const mutations = {
  //SET ACTIVE USER
  setActiveUser(state, payload) {
    let user;
    state.status = [];
    // if(state.auth.user.station[0] == 'ipah1'){
    //   user = 0
    // }else if (state.auth.user.station[0] == 'ipah2'){
    //   user =1

    // }else if (state.auth.user.station[0] == 'tkpmPagoh'){
    //   user =2

    // }else{
    //   user =3
    // }
    // state.activeUser = user
  },
  setLocations(state, payload) {
    payload.forEach((element) => {
      element.data = "";
      element.ts = "";
    });
    state.locations = payload;
    // console.log('sana',state.locations)
    state.showData = true;
  },
  setBuildingDetail(state, payload) {
    console.log(payload);
    // 0 owner
    // 1 floor
    // 2 area
    // 3 occupants
    // 4 cei
    if (payload.owner == null) {
      state.buildingDetails[0].data = "No data...";
    } else state.buildingDetails[0].data = payload.owner;
    // if(payload.no_of_floors == null){
    //   state.buildingDetails[1].data = "No data..."
    // }else state.buildingDetails[1].data = payload.no_of_floors
    if (payload.net_floor_area == null) {
      state.buildingDetails[1].data = "No data...";
    } else state.buildingDetails[1].data = payload.net_floor_area;
    if (payload.no_of_occupants == null) {
      state.buildingDetails[2].data = "No data...";
    } else state.buildingDetails[2].data = payload.no_of_occupants;

    if (payload.cei == null) {
      state.buildingDetails[3].data = "No data...";
    } else state.buildingDetails[3].data = payload.cei;
  },
  setBuildingDetailClear(state, payload) {
    state.buildingDetails = [
      { desc: "          owner", image: "OWNER.png", data: null },
      // { desc:"no of floors",
      //   image:"NOOFFLOOR.png",
      //   data:null
      // },
      { desc: "net floor area", image: "NETFLOORAREA.png", data: null },
      { desc: "no of occupants", image: "1.png", data: null },
      {
        desc: "Grid electricity emission factor",
        image: "CEI.png",
        data: null,
      },
    ];
  },
  setId(state, payload) {
    state.id = payload;
    console.log(state.id);
  },

  // ADMIN
  setBuildingData(state, payload) {
    state.admin.allBuilding = payload;
    console.log(state.admin.allBuilding);
  },

  setAdminCount(state, payload) {
    state.adminCount = payload;
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
    // return {username:"ali"}
  },
};
