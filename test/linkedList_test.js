import {LinkedList} from '../LinkedList/LinkedList'

var cities = new LinkedList();
cities.insert('conway','head');
cities.insert('Resel','conway');
cities.insert('Alma','Resel');
cities.display();

var cities2 = new LinkedList();
cities2.insert("Conway", "head");
cities2.insert("Russellville", "Conway");
cities2.insert("Carlisle", "Russellville");
cities2.insert("Alma", "Carlisle");
cities2.display();
cities2.remove("Carlisle");
cities2.display();