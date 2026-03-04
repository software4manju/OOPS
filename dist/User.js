"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    username = "Jacob";
    password = "JacobPassword";
}
exports.User = User;
const user = new User();
user.password = "passwordHacked";
console.log(user.password);
//# sourceMappingURL=User.js.map