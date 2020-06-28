
import express, { RouterOptions } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
const router = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

router.get('/', (req, res) => {
   return res.json({
       message : 'hello world'
   });
});

router.get('/items', itemsController.index);
router.post('/points', pointsController.create);
router.get('/points/:id', pointsController.show);

export default router;