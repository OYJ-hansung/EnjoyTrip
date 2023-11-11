package com.ssafy.plan.model;

public class PlanParamDto {
	String key;
	String word;

	int pgno;
	int start;
	int listsize;
	
	public PlanParamDto() {
		super();
	}
	
	public PlanParamDto(String key, String word) {
		super();
		this.key = key;
		this.word = word;
	}
	
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public String getWord() {
		return word;
	}
	public void setWord(String word) {
		this.word = word;
	}
	
	public int getPgno() {
		return pgno;
	}

	public void setPgno(int pgno) {
		this.pgno = pgno;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getListsize() {
		return listsize;
	}

	public void setListsize(int listsize) {
		this.listsize = listsize;
	}

	
	

}
