import dva from 'dva';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';

// import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { name: 'dva1', id: 1 },
      { name: 'dva2', id: 2 },
      { name: 'dva1', id: 3 },
      { name: 'dva2', id: 4 },
      { name: 'dva1', id: 5 },
      { name: 'dva2', id: 6 },
      { name: 'dva1', id: 7 },
      { name: 'dva2', id: 8 },
    ],
  },
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/products'));
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

