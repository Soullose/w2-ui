<template>
    <div class="d-flex fill-height">
        <v-img src="@/assets/background.svg">
            <v-container>
                <div class="d-flex justify-center align-center">
                    <div class="flex-row justify-center">
                        <div class="d-flex justify-center text-h5 my-10 primary--text">xxx管理系统</div>
                        <!-- <div class="d-flex justify-center pb-4">
                            <v-avatar size="96" color="grey lighten-3">
                                <v-icon size="72">fa-user-tie</v-icon>
                            </v-avatar>
                        </div> -->
                        <div class="d-flex justify-center text-subtitle-1 primary--text text-darken-6 font-weight-medium pb-4">账号密码登录</div>
                        <v-form>
                            <v-text-field outlined label="用户名" prepend-inner-icon="fa-user" v-model="loginForm.username" />
                            <v-text-field
                                type="password"
                                outlined
                                label="密码"
                                prepend-inner-icon="fa-lock"
                                append-icon="fa-eye-slash"
                                v-model="loginForm.password"
                                v-if="isHidePassword"
                                @click:append="isHidePassword = !isHidePassword"
                            />
                            <v-text-field
                                outlined
                                label="密码"
                                prepend-inner-icon="fa-lock"
                                append-icon="fa-eye"
                                v-model="loginForm.password"
                                @click:append="isHidePassword = !isHidePassword"
                                v-else
                            />
                        </v-form>
                        <div class="d-flex justify-end d-block align-center">
                            <router-link class="ml-3 text-decoration-none">找回密码</router-link>
                        </div>
                        <div class="py-6 text-center">
                            <v-btn block light color="primary darken-2" class="text-capitalize" x-large :loading="logining" @click="onLogin">登录系统</v-btn>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-img>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            logining: false,
            loginAlert: true,
            loginFailed: false,
            isHidePassword: true,
            errorMessage: '用户名或密码错误，请重新登录'
        };
    }
};
</script>

<style lang="scss" scoped></style>
