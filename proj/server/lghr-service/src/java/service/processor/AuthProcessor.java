package service.processor;


import org.json.JSONObject;
import service.helper.JsonHelper;
import org.tinyradius.util.RadiusClient; 
import org.tinyradius.packet.AccessRequest;
import org.tinyradius.packet.RadiusPacket;

/***
 *Created by Hyunwook Shin
 */

public class AuthProcessor extends PostProcessor {
    String authenticate( String username, String password ) throws Exception {
       String host = "127.0.0.1";
       String secret = "lghr";
       RadiusClient radius = new RadiusClient( host, secret );
       AccessRequest request = new AccessRequest( username, password );
       RadiusPacket packet = radius.authenticate( request );
       return packet.toString();
    }

    @Override
    String handle() throws Exception {
       JSONObject requestBody = new JSONObject( body );
       JSONObject info = new JSONObject();
       try {
          String username = requestBody.getString( "username" );
          String password = requestBody.getString( "password" );
          System.out.println( "Username is " + username );
          String token = authenticate( username, password );
          info.put("error", "");
          info.put("value", "token" );
       } catch (Exception e) {
          info.put("error", "Not authenticated");
          info.put("value", "" );
       }
       return info.toString();
    }
}
