import java.awt.Color;
import java.awt.Graphics;
import java.awt.Polygon;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class LinesRectsOvalsJPanel extends JPanel 
{

	public static void main( String args[] )
	{

	   JFrame frame = 
	      new JFrame( "Drawing lines, rectangles and ovals" );
	   frame.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );

	   LinesRectsOvalsJPanel linesRectsOvalsJPanel = new LinesRectsOvalsJPanel(); 
	   linesRectsOvalsJPanel.setBackground( Color.WHITE ); 
	   frame.add( linesRectsOvalsJPanel ); 
	   frame.setSize( 400, 210 );
	   frame.setVisible( true );
	}

	
public void paintComponent( Graphics g )
{
	   super.paintComponent( g );

	   this.setBackground( Color.WHITE );

     g.drawLine(0, 105, 400, 105);
     g.drawLine(200, 0, 200, 210);

     for(int i =0; i < 400; i=i+5){
       g.drawLine(i, 102, i, 108 );
     }

     for(int i =0; i < 200; i=i+5){
       g.drawLine(198, i, 202, i);
     }
	  //  int x = 10, y = 10;
	  //  g.setColor( new Color(0, 168,89) );
	  //  g.fillRect( x + 0,  y + 0, 400, 280 );
	   
	   

	  //  g.setColor( new Color(255, 204, 41) );

    
    // int xpoints[] = {x+34, x+200, x+366, x+200};
    // int ypoints[] = {y+140, y+34, y+140, y+246};
    // int npoints = 4;
    
    // g.fillPolygon(xpoints, ypoints, npoints);


    // g.setColor( new Color(62, 64, 149) );
	  //  g.fillOval(x+130, y+70, 140, 140);
	  //  g.drawLine(x+200, y+34, x+366	, y+140);
	  //  g.drawLine(x+366	, y+140, x+200	, y+246);
	  //  g.drawLine(x+200	, y+246, x+34	, y+140);
	  //  g.drawLine(x+34	, y+140, x+200, y+34);
}
}