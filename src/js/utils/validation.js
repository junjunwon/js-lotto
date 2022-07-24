import {PRICE_FOR_ONE} from '../const/const.js'

export const validationFor1000Unit = (target) => target % PRICE_FOR_ONE === 0;