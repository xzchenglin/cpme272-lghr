package service;

import org.tinyradius.util.RadiusServer;
import java.net.InetSocketAddress;

/**
 * Created by Hyunwook Shin
 *
 * This Java service is used to do AD authentication
 * of the user.
 */

public class AuthService extends RadiusServer {

   static AuthService instance = new AuthService();
   
   public String getSharedSecret( InetSocketAddress socket ) {
      return "lghr";
   }

   public String getUserPassword( String user ) {
      return "world";
   }

   public static void main(String[] args) {
      try {
         instance.setAuthPort(1812);
         instance.start( true, false ); // only start auth
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
}
