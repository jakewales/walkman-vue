<template>
  <div>
    <el-form>
      <el-form-item v-for="(item, index) of inputArray" :key="index">
        <el-time-select 
        v-model="item.value"
        :picker-options="item.options"
        :name="item.name"
        @change="setCurrentTime(index)">
        </el-time-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

interface PickerOption {
  start: string;
  step: string;
  end: string;
}

interface Input {
  name: string;
  value: string;
  options: PickerOption;
}

@Component({
  components: {
  },
})

export default class TimeInput extends Vue {
  @Prop(Number) public count!: number;
  private currentKey: number | null = null;
  private inputArray: Array<Input> = [];
  private testValue: string = '';

  private currentTime: string = '';

  private created() {
    for (let i: number = 0; i < this.count; i += 1) {
      this.inputArray.push({
        name: `${i}-name`,
        value: '',
        options: {
            start: '00:00',
            step: '00:05',
            end: '12:00',
        },
      } as Input);
    }
  }
  private setCurrentTime(index: number) {
    this.currentTime = this.inputArray[index].value;
    for (let i = index; i < this.inputArray.length; i += 1) {
      this.inputArray[i].value = this.currentTime;
      this.inputArray[i].options.start = this.currentTime;
    }
  }
}
</script>
