package com.newcar.newauto;

import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class ParsJsop {

    public static String parsing() throws IOException{
        Document doc = Jsoup.connect("http://eclipse.org").get();
        String title = doc.title();
     //   System.out.println("Title : " + title);
        return title;
    }
}
