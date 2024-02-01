<script setup>
import {useRouter} from "vue-router";
import {setAuthenticationStatus} from "@/utility.js";

localStorage.removeItem("user");
setAuthenticationStatus();

const router = useRouter();
router.push("/");
</script>
