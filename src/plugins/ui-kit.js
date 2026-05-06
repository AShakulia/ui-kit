import '../styles/main.css';
import UIButton from '@/components/UIButton/UIButton.vue';
const UiKit = {
    install(app) {
        app.component('UIButton', UIButton);
    }
};
export default UiKit;
export { UIButton };
