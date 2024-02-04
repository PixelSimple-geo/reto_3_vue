<script setup>
import {useRouter} from "vue-router";
import {setAuthenticationStatus} from "@/utility.js";

localStorage.removeItem("token");
setAuthenticationStatus();

const router = useRouter();
router.push("/");
</script>
