import { defineComponent } from "vue";
import { getBase } from "./apiAction";

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1>Test</h1>
        <button onClick={getBase}>点击</button>
      </div>
    );
  },
});
