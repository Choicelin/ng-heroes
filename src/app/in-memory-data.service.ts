import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Susan'},
      { id: 11, name: 'paco' },
      { id: 12, name: '韩老师' },
      { id: 13, name: '显大哥' },
      { id: 14, name: '大梅子' },
      { id: 15, name: '国龙' },
      { id: 16, name: '小师父' },
      { id: 17, name: '舒越' },
      { id: 18, name: '黎腾' },
      { id: 19, name: '张王颖' },
      { id: 20, name: '马雨' },
      { id: 21, name: '周扬' },
      { id: 22, name: '维林' },
      { id: 23, name: '肖亚' },
      { id: 24, name: '蒋磊' },
      { id: 25, name: '罗银平' },
      { id: 26, name: '陈天' },
      { id: 27, name: '小毕' },
      { id: 28, name: '露露' },
      { id: 29, name: '李莉' },
      { id: 30, name: '田指导' },
      { id: 31, name: '鹏哥' },
      { id: 32, name: '虎哥' },
      { id: 33, name: '星仔' },
      { id: 34, name: 'zz 敖' },
      { id: 34, name: 'old driver 刚' },
      { id: 35, name: '七彩天空 阳' },
      { id: 36, name: '光明哥' },
      { id: 37, name: '黄春' },
      { id: 38, name: '刘媛' },
      { id: 39, name: '刘盼' },
      { id: 40, name: '文清' },
      { id: 41, name: '卢甜' },
      { id: 42, name: '柯蕾' }
    ];
    return {heroes};
  }
}
