-- Creating table named bk_author
DROP TABLE IF EXISTS bk_author CASCADE;
CREATE TABLE bk_author (
    authorid SERIAL PRIMARY KEY NOT NULL,
    fName VARCHAR(255) NOT NULL,
    lName VARCHAR(255) NOT NULL
);

-- Creating table named bk_publisher
DROP TABLE IF EXISTS bk_publisher CASCADE;
CREATE TABLE bk_publisher(
    pubId SERIAL PRIMARY KEY NOT NULL,
    pubName VARCHAR(100) NOT NULL,
    pubContact VARCHAR(15)
);

-- Creating table named bk_book
DROP TABLE IF EXISTS bk_book CASCADE;
CREATE TABLE bk_book(
    id SERIAL PRIMARY KEY NOT NULL,
    isbn bigint UNIQUE NOT NULL,
    title VARCHAR(225),
    description TEXT,
    pubdate DATE,
    pubid int,
    authorid int,
    cost decimal(8,2),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY(pubid) REFERENCES bk_publisher(pubid),
    FOREIGN KEY(authorid) REFERENCES bk_author(authorid)
);

-- Inseting data into author
insert into bk_author (fName, lName)
values ('Nelson', 'Mandela');
insert into bk_author (fName, lName)
values ('Basetsana', 'Kumalo');
insert into bk_author (fName, lName)
values ('William', 'Shakespeare');

-- Inseting data into publisher
insert into bk_publisher (pubName, pubContact)
values ('Little Brown & Co', 'grandcentralpublishing@hbgusa.com');
insert into bk_publisher (pubName, pubContact)
values ('Penguin Random House South Africa', 'queries@penguinrandomhouse.co.za');
insert into bk_publisher (pubName, pubContact)
values ('Cambridge University Press', 'cschn@cambridge.org');


-- Inserting data into bk_book
insert into bk_book (isbn, title, description, pubdate, pubid, authorid, cost)
values ( 9781408703113, 'A Long Walk To Freedom', 
        'The riveting memoirs of the outstanding moral and political
        leader of our time. Long walk to freedom brilliantly re-creates 
        the drama of the experiences that helped shape Nelson Mandelas 
        destiny. Emotive, compelling and uplifting, this is the 
        exhilarating story of an epic life; a story of hardship, 
        resilience and ultimate triumph told with the clarity and 
        eloquence of a born leader.' ,
        '12 December 2013', 
        1, 1, '711.00');

insert into bk_book (isbn ,title, description, pubdate, pubid, authorid, cost)
values (9781776094813, 'Bassie My Journey of Hope', 
        'In Bassie – My Journey of Hope, Bassie recounts her life journey, 
        including her relationships with mentors like Nelson Mandela. 
        She also shares the secrets of her success and all the lessons 
        shes learnt along the way.', 
        '19 September 2019', 
        2, 2,'358.00' );


insert into bk_book (isbn, title, description, pubdate, pubid, authorid, cost)
values (9780521646352,
        'Hamlet', 
        'This edition tells the story of Hamlet in production, 
        from Burbage at the Globe to Branagh on film, relating stage interpretations 
        to developments in the theatre, in literary criticism and in society at large. 
        Hamlet is the most performed play of all time. The stage history records an 
        ongoing process of discovery, as successive performers have found what 
        it is in the play that will speak most powerfully to the audiences of 
        their own times. The introduction focuses not only on star Hamlets, but 
        on whole productions of the play including supporting players and, in 
        this century, direction and design. Although the volume as a whole 
        concentrates on stage performances in England and the US, outstanding 
        film versions and European stage productions are also featured. 
        Professor Hapgood makes extensive use of primary sources and his 
        substantial commentary provides numerous details of line-readings, 
        costuming and stage business culled from this research.',
        '27 May 1999', 
        7, 3, '1292.00' );

insert into bk_book (isbn, title, description, pubdate, pubid, authorid, cost)
values (9780521680981,
        'Macbeth', 
        'The New Cambridge Shakespeare appeals to students worldwide for 
        its up-to-date scholarship and emphasis on performance. The series 
        features line-by-line commentaries and textual notes on the 
        plays and poems. Introductions are regularly refreshed with 
        accounts of new critical, stage and screen interpretations. 
        This second edition of Macbeth provides a thorough reconsideration 
        of one of Shakespeares most popular plays. In his introduction, 
        A. R. Braunmuller explores Macbeths immediate theatrical and 
        political contexts, particularly the Gunpowder Plot, and addresses 
        such celebrated questions as: do the Witches compel Macbeth to murder;
        is Lady Macbeth herself in some sense a witch; is Macduff morally
        culpable? A new and well-illustrated account of the play in performance 
        examines several cinematic versions, such as those by Kurosawa and Roman 
        Polanski, as well as other dramatic adaptations. Several possible new 
        sources are suggested and the presence of Thomas Middleton
        s writing in the play is also proposed.','27 November 2008', 
        7, 3, '309.00' );