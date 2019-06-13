package com.serverless.dal;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig.TableNameOverride;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBRangeKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.PaginatedQueryList;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import org.apache.log4j.Logger;

@DynamoDBTable(tableName = "PLACEHOLDER_OUTAGES_TABLE_NAME")
public class Outage {

    // get the table name from env. var. set in serverless.yml
    private static final String OUTAGES_TABLE_NAME = System.getenv("OUTAGES_TABLE_NAME");

    private static DynamoDBAdapter db_adapter;
    private final AmazonDynamoDB client;
    private final DynamoDBMapper mapper;

    private Logger logger = Logger.getLogger(this.getClass());

    private String id;
    private String location;

    @DynamoDBHashKey(attributeName = "id")
    @DynamoDBAutoGeneratedKey
    public String getId() {
        return this.id;
    }
    public void setId(String id) {
        this.id = id;
    }

    @DynamoDBRangeKey(attributeName = "location")
    public String getLocation() {
        return this.location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public Outage() {
        // build the mapper config
        DynamoDBMapperConfig mapperConfig = DynamoDBMapperConfig.builder()
            .withTableNameOverride(new DynamoDBMapperConfig.TableNameOverride(OUTAGES_TABLE_NAME))
            .build();
        // get the db adapter
        this.db_adapter = DynamoDBAdapter.getInstance();
        this.client = this.db_adapter.getDbClient();
        // create the mapper with config
        this.mapper = this.db_adapter.createDbMapper(mapperConfig);
    }

    public String toString() {
        return String.format("Outage [id=%s, location=%s]", this.id, this.location);
    }

    // methods
    public Boolean ifTableExists() {
        return this.client.describeTable(OUTAGES_TABLE_NAME).getTable().getTableStatus().equals("ACTIVE");
    }

    public List<Outage> list() throws IOException {
      DynamoDBScanExpression scanExp = new DynamoDBScanExpression();
      List<Outage> results = this.mapper.scan(Outage.class, scanExp);
      for (Outage o : results) {
        logger.info("Outages - list(): " + o.toString());
      }
      return results;
    }
    /*
    public Outage get(String id) throws IOException {
        Outage outage = null;
        HashMap<String, AttributeValue> av = new HashMap<String, AttributeValue>();
        av.put(":v1", new AttributeValue().withS(id));

        DynamoDBQueryExpression<Product> queryExp = new DynamoDBQueryExpression<Product>()
            .withKeyConditionExpression("id = :v1")
            .withExpressionAttributeValues(av);

        PaginatedQueryList<Product> result = this.mapper.query(Outage.class, queryExp);
        if (result.size() > 0) {
          outage = result.get(0);
          logger.info("Outages - get(): outage - " + outage.toString());
        } else {
          logger.info("Outages - get(): outage - Not Found.");
        }
        return outage;
    }*/

    public void save(Outage outage) throws IOException {
        logger.info("Outages - save(): " + outage.toString());
        this.mapper.save(outage);
    }
    /*
    public Boolean delete(String id) throws IOException {
        Outage outage = null;

        // get product if exists
        outage = get(id);
        if (outage != null) {
          logger.info("Outages - delete(): " + outage.toString());
          this.mapper.delete(outage);
        } else {
          logger.info("Outages - delete(): outage - does not exist.");
          return false;
        }
        return true;
    }*/

}