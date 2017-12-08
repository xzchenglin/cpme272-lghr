package service.processor;

import common.JsonHelper;
import db.BaseDao;
import db.CustomerImpl;
import db.OrderImpl;

/***
 *Created by Lin Cheng
 */
public class ItemProcessor extends UrlProcessor {
    @Override
    String handle() throws Exception {

        BaseDao dao;

        switch (paramMap.get("type")){
            case "customer":
                dao = new CustomerImpl();
                return JsonHelper.toJson(dao.getById(paramMap.get("id")));
            case "order":
                dao = new OrderImpl();
                return JsonHelper.toJson(dao.getById(paramMap.get("id")));
            default:
                return JsonHelper.toJson("Not supported.");
        }
    }
}
