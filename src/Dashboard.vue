<template>
  <div id="wrapper" class="container-fluid m-0 p-0">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view />
        </div>

      </div>



      </div>
  </div>

</template>

<script>
import Header from "@/views/Layout/Header.vue";
import Sidebar from "@/views/Layout/Sidebar.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style></style>
