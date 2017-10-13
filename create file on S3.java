package sjsu.cmpe272.hw2;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.time.Instant;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

/*
code written by Yu Xu
*/
@CustomerFile_S3_Object
public class CustomerFile {

	public CustomerFile(){}
	
	public CustomerFile(String key, String url) {
		this.key = key;
		this.url =url;		
	}

    private long id;
	
	private String key;
	
	private String url;

	public String getKey() {
		return key;
	}
}

@Service
public class FileArchiveService {

	@Autowired
	private AmazonS3Client s3Client;

	private static final String S3_BUCKET_NAME = "movielovers-cmpe281proj1";

	public CustomerFile saveFileToS3(MultipartFile multipartFile) throws FileArchiveServiceException {

		try{
			File uploadFile = convertFromMultiPart(multipartFile);
			String key = Instant.now().getEpochSecond() + "_" + uploadFile.getName();

			/* save file */
			s3Client.putObject(new PutObjectRequest(S3_BUCKET_NAME, key, uploadFile));

			/* get signed URL and set httpMethod */
			GeneratePresignedUrlRequest generatePresignedUrlRequest = new GeneratePresignedUrlRequest(S3_BUCKET_NAME, key);
			generatePresignedUrlRequest.setMethod(HttpMethod.GET);

			URL fileUrl = s3Client.generatePresignedUrl(generatePresignedUrlRequest); 

			return new CustomerFile(key, fileUrl.toString());
		}
		catch(Exception ex){			
			throw new Exception("Error at saving a file to S3", ex);
		}		
	}