export default function ({ $auth, redirect }) {
  //Check if topic has been registered
  // console.log($auth.$state.user.station)
  if ($auth.hasScope('admin')) {
    // console.log("this is not admin")
    return redirect('/admin')
  }
  
  if($auth.$state.user.building_id==null){
    return redirect('/landing')
  }


}